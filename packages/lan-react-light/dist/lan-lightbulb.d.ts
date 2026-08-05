import React from 'react';

export interface LanLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulb(props: LanLightbulbProps): React.ReactElement;
export default LanLightbulb;
