import React from 'react';

export interface LanPlayPauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayPauseRegular(props: LanPlayPauseRegularProps): React.ReactElement;
export default LanPlayPauseRegular;
