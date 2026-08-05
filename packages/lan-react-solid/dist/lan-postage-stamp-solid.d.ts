import React from 'react';

export interface LanPostageStampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPostageStampSolid(props: LanPostageStampSolidProps): React.ReactElement;
export default LanPostageStampSolid;
