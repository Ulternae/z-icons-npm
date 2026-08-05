import React from 'react';

export interface LanMaskSnorkelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskSnorkelSolid(props: LanMaskSnorkelSolidProps): React.ReactElement;
export default LanMaskSnorkelSolid;
