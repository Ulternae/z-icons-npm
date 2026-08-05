import React from 'react';

export interface LanMessageDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageDotSolid(props: LanMessageDotSolidProps): React.ReactElement;
export default LanMessageDotSolid;
