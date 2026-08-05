import React from 'react';

export interface LanGridDividersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridDividersSolid(props: LanGridDividersSolidProps): React.ReactElement;
export default LanGridDividersSolid;
