import React from 'react';

export interface LanMp3PlayerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMp3PlayerRegular(props: LanMp3PlayerRegularProps): React.ReactElement;
export default LanMp3PlayerRegular;
