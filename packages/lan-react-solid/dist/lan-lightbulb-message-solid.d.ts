import React from 'react';

export interface LanLightbulbMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbMessageSolid(props: LanLightbulbMessageSolidProps): React.ReactElement;
export default LanLightbulbMessageSolid;
