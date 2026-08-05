import React from 'react';

export interface LanHouseChimneyBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseChimneyBlank(props: LanHouseChimneyBlankProps): React.ReactElement;
export default LanHouseChimneyBlank;
