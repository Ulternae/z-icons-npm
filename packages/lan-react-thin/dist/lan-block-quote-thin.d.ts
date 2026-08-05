import React from 'react';

export interface LanBlockQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuoteThin(props: LanBlockQuoteThinProps): React.ReactElement;
export default LanBlockQuoteThin;
