import React from 'react';

export interface LanMp3PlayerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMp3PlayerThin(props: LanMp3PlayerThinProps): React.ReactElement;
export default LanMp3PlayerThin;
