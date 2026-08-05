import React from 'react';

export interface LanLightbulbOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbOnSolid(props: LanLightbulbOnSolidProps): React.ReactElement;
export default LanLightbulbOnSolid;
