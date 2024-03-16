#include<iostream>
    using namespace std;
       void add();
       void sub();
       void mult();
       void tran();
     int main()
    {
        cout<<" This Program is to be done, \n  ";
        cout<<"accept two matrix then to add,\n";
        cout<<" substract, transpose and multiplication\n  of two matrix.\n  ";
        cout<<"Choose one of the following . \n ";
        cout<<" Enter A or a For addition .\n ";
        cout<<" Enter S or s For substract .\n ";
        cout<<" Enter M or m For multiplication .\n ";
        cout<<" Enter T or t For Transpose .\n ";
        cout<<" Enter D or d For Exit.\n ";
        cout<<"Please Enter above spelling : ";
        char ch;
        cin>>ch;
    do {
     switch (ch){
       case 'A':
       case 'a':  add();  break;
       case 'S':
       case 's': sub();   break;
       case 'M':
       case 'm':  mult();  break;
       case 'T':
       case 't': tran();  break;
      }
      if (ch!='d'&&ch!='D'){   //Check the enter spelling
            cout<<" Please Enter above spelling : ";
           cin>>ch;
      }
    }
    while(ch!='d'&&ch!='D');
    }

//This for addition
    void add(){
      cout<<" This is Addition of matrix :\n";
       cout<<" Enter Row size of matrix 1 :\n ";
       int x,y;
       cin>>x;
       cout<<" Enter column size of matrix 1 :\n ";
       cin>>y;
       cout<<"Enter Element of first Matrix :\n";
       int mat1[x][y],add[x][y];
       for(int i=0;i<x;i++){
       for(int j=0;j<y;j++){
       cin>>mat1[i][j];}
      }
      cout<<"Enter Second Matrix \n";
    cout<<" Enter Row size of matrix 2:\n ";
    int a,b;
    cin>>a;
    cout<<" Enter column size of matrix 2 :\n ";
    cin>>b;
    int mat2[a][b];
    if(a==x&&b==y){
    cout<<"Enter Element of second Matrix :\n";
    for(int i=0;i<a;i++){
    for(int j=0;j<b;j++){
    cin>>mat2[i][j];}
    }
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    add[i][j]=mat1[i][j]+mat2[i][j];
    }
    }
    cout<<"addition of two matrix is = \n";
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    cout<<add[i][j]<<"    ";}
    cout<<endl;
    }
    }
    else{
    cout<<" Enter Equal Row To Row And \n Coulumn To Coulumn \n";
    }
    }
    void sub()
    {
    cout<<" This subtract of matrix :\n";
    cout<<" Enter Row size of matrix 1 :\n ";
    int x,y;
    cin>>x;
    cout<<" Enter column size of matrix 1 :\n ";
    cin>>y;
    cout<<"Enter Element of Matrix 1 :\n";
    int mat1[x][y],sub[x][y];
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    cin>>mat1[i][j];}
    }
    cout<<"Enter Second Matrix \n";
    cout<<" Enter Row size of matrix 2:\n ";
    int a,b;
    cin>>a;
    cout<<" Enter column size of matrix 2 :\n ";
    cin>>b;
    int mat2[a][b];
    if(a==x&&b==y){
    cout<<"Enter Element of second Matrix :\n";
    for(int i=0;i<a;i++){
    for(int j=0;j<b;j++){
    cin>>mat2[i][j];}
    }
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    sub[i][j]=mat1[i][j]-mat2[i][j];
    }
    }
    cout<<" subtraction  of \n two matrix is = \n";
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    cout<<sub[i][j]<<"    ";}
    cout<<endl;
    }
    }
    else{
    cout<<" Enter Equal Row To Row And \n Coulumn To Coulumn \n";
    }
    }

    void mult(){
    // Multiplication
     int r1, c1, r2, c2, i, j, k;

        cout << "Enter rows and columns for first matrix: ";
        cin >> r1 >> c1;
        cout << "Enter rows and columns for second matrix: ";
        cin >> r2 >> c2;
        int a[r1][c1], b[r2][c2], mult[r1][c2];


        // If column of first matrix in not equal to row of second matrix,
        // ask the user to enter the size of matrix again.
        while (c1!=r2)
        {
            cout << "Error! column of first matrix not equal to row of second.";

            cout << "Enter rows and columns for first matrix: ";
            cin >> r1 >> c1;

            cout << "Enter rows and columns for second matrix: ";
            cin >> r2 >> c2;
        }

        // Storing elements of first matrix.
        cout << endl << "Enter elements of matrix 1:" << endl;
        for(i = 0; i < r1; ++i)
            for(j = 0; j < c1; ++j)
            {
                cout << "Enter element a" << i + 1 << j + 1 << " : ";
                cin >> a[i][j];
            }
// Storing elements of second matrix.
        cout << endl << "Enter elements of matrix 2:" << endl;
        for(i = 0; i < r2; ++i)
            for(j = 0; j < c2; ++j)
            {
                cout << "Enter element b" << i + 1 << j + 1 << " : ";
                cin >> b[i][j];
            }

        // Initializing elements of matrix mult to 0.
        for(i = 0; i < r1; ++i)
            for(j = 0; j < c2; ++j)
            {
                mult[i][j]=0;
            }

        // Multiplying matrix a and b and storing in array mult.
        for(i = 0; i < r1; ++i)
            for(j = 0; j < c2; ++j)
                for(k = 0; k < c1; ++k)
                {
                    mult[i][j] += a[i][k] * b[k][j];
                }

        // Displaying the multiplication of two matrix.
        cout << endl << "Output Matrix: " << endl;
        for(i = 0; i < r1; ++i){
        for(j = 0; j < c2; ++j)
        {
            cout << " " << mult[i][j];
            //if(j == c2-1)
              //  cout << endl;
        }
        cout << endl;
}
    }


    void tran(){
    cout<<" This is to Transpose matrix :\n";
    cout<<" Enter Row size of matrix :\n ";
    int x,y;
    cin>>x;
    cout<<" Enter column size of matrix :\n ";
    cin>>y;
    cout<<"Enter Element of  Matrix :\n";
    int tran[x][y];
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    cin>>tran[i][j];}
    }

    cout<<" The Enter matrix is = \n";
    for(int i=0;i<x;i++){
    for(int j=0;j<y;j++){
    cout<<"  "<<tran[i][j]<<"  ";
    }
    cout<<endl;
    }

    cout<<"Transpose =\n";
    for(int j=0;j<y;j++){
    for(int i=0;i<x;i++){
    cout<<" "<<tran[i][j]<<" ";
    }
    cout<<endl;
    }
    }
