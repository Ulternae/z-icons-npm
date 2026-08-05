import React from 'react';

export interface LanMp3PlayerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMp3Player(props: LanMp3PlayerProps): React.ReactElement;
export default LanMp3Player;
