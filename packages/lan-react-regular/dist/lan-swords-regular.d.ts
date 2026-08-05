import React from 'react';

export interface LanSwordsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsRegular(props: LanSwordsRegularProps): React.ReactElement;
export default LanSwordsRegular;
