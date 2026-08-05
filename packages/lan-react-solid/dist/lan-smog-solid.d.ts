import React from 'react';

export interface LanSmogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmogSolid(props: LanSmogSolidProps): React.ReactElement;
export default LanSmogSolid;
