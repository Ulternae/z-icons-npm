import React from 'react';

export interface LanWebhookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWebhookThin(props: LanWebhookThinProps): React.ReactElement;
export default LanWebhookThin;
