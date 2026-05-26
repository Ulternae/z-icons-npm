import React from 'react';

export interface LanPlayPauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayPauseRegular: React.FC<LanPlayPauseRegularProps>;
export default LanPlayPauseRegular;
