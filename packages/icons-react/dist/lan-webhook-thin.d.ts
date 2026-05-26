import React from 'react';

export interface LanWebhookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWebhookThin: React.FC<LanWebhookThinProps>;
export default LanWebhookThin;
