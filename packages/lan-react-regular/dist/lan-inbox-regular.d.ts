import React from 'react';

export interface LanInboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxRegular(props: LanInboxRegularProps): React.ReactElement;
export default LanInboxRegular;
