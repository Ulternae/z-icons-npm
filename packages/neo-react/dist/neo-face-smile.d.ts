import React from 'react';

export interface NeoFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceSmile(props: NeoFaceSmileProps): React.ReactElement;
export default NeoFaceSmile;
