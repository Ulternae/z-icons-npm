import React from 'react';

export interface LanSwordsLaserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsLaserRegular(props: LanSwordsLaserRegularProps): React.ReactElement;
export default LanSwordsLaserRegular;
