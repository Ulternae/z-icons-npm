import React from 'react';

export interface LanDoNotEnterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoNotEnterSolid(props: LanDoNotEnterSolidProps): React.ReactElement;
export default LanDoNotEnterSolid;
