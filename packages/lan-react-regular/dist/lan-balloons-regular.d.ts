import React from 'react';

export interface LanBalloonsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonsRegular(props: LanBalloonsRegularProps): React.ReactElement;
export default LanBalloonsRegular;
