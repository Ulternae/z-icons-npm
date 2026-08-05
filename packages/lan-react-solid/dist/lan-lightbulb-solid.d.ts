import React from 'react';

export interface LanLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbSolid(props: LanLightbulbSolidProps): React.ReactElement;
export default LanLightbulbSolid;
