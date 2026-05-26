import React from 'react';

export interface LanWebhookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWebhook: React.FC<LanWebhookProps>;
export default LanWebhook;
