import React from 'react';

export interface NeoDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDoorClosedSolid(props: NeoDoorClosedSolidProps): React.ReactElement;
export default NeoDoorClosedSolid;
