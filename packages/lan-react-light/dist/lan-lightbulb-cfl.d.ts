import React from 'react';

export interface LanLightbulbCflProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbCfl(props: LanLightbulbCflProps): React.ReactElement;
export default LanLightbulbCfl;
