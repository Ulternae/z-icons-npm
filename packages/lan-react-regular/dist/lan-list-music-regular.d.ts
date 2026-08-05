import React from 'react';

export interface LanListMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListMusicRegular(props: LanListMusicRegularProps): React.ReactElement;
export default LanListMusicRegular;
