import React from 'react';

export interface MinaWebcamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWebcamSolid(props: MinaWebcamSolidProps): React.ReactElement;
export default MinaWebcamSolid;
