import React from 'react';

export interface LanShrimpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShrimpRegular(props: LanShrimpRegularProps): React.ReactElement;
export default LanShrimpRegular;
