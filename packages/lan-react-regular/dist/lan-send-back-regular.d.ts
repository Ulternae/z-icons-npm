import React from 'react';

export interface LanSendBackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSendBackRegular(props: LanSendBackRegularProps): React.ReactElement;
export default LanSendBackRegular;
