import * as THREE from 'three';
const vertices = [];
function getTexture(){
    var texture1=new THREE.TextureLoader().load("./src/assets/1.png");
    var texture2=new THREE.TextureLoader().load("./src/assets/2.png");
    var texture3=new THREE.TextureLoader().load("./src/assets/3.png");
    var texture4=new THREE.TextureLoader().load("./src/assets/4.png");
    for ( let i = 0; i < 10000; i ++ ) {

        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;

        vertices.push( x, y, z );

    }
    return vertices;
}

// const sphere=new THREE.SphereGeometry(50);
// const cube=new THREE.BoxGeometry(100,100,100,10,10,10);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position",new THREE.Float32BufferAttribute( vertices, 3 ));

// const material=new THREE.PointsMaterial({
//     map:getTexture(),
//     size:1,
//     transparent:true
// })
parameters = [
    [[ 1.0, 0.2, 0.5 ], sprite2, 20 ],
    [[ 0.95, 0.1, 0.5 ], sprite3, 15 ],
    [[ 0.90, 0.05, 0.5 ], sprite1, 10 ],
    // [[ 0.85, 0, 0.5 ], sprite5, 8 ],
    [[ 0.80, 0, 0.5 ], sprite4, 5 ]
];

for ( let i = 0; i < parameters.length; i ++ ) {

    // const color = parameters[ i ][ 0 ];
    const sprite = parameters[ i ][ 1 ];
    const size = parameters[ i ][ 2 ];

    materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
    // materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ], THREE.SRGBColorSpace );

    const particles = new THREE.Points( geometry, materials[ i ] );

    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;

    scene.add( particles );

}
// const textureLoader = new THREE.TextureLoader();
// const spriteTexture = textureLoader.load('assets/1.png');
// const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });

// // 创建Sprite粒子
// const point=new THREE.Points(geometry,material);
// const sprite=new THREE.Sprite(material);
// console.log(point);

// sprite.position.set(0, 0, 0);
export default point;