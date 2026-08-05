import React from 'react';

export interface LanHandHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHeartRegular(props: LanHandHeartRegularProps): React.ReactElement;
export default LanHandHeartRegular;
