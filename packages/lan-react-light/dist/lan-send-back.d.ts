import React from 'react';

export interface LanSendBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSendBack(props: LanSendBackProps): React.ReactElement;
export default LanSendBack;
