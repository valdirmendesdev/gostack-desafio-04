module.exports ={
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    //Permite declarar propriedades nas classes sem get e set
    '@babel/plugin-proposal-class-properties'
  ]
}