import React from 'react';

export interface LanFaceKissSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissSolid(props: LanFaceKissSolidProps): React.ReactElement;
export default LanFaceKissSolid;
