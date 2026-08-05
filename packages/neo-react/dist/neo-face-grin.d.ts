import React from 'react';

export interface NeoFaceGrinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceGrin(props: NeoFaceGrinProps): React.ReactElement;
export default NeoFaceGrin;
