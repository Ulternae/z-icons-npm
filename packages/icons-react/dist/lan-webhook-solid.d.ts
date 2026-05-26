import React from 'react';

export interface LanWebhookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWebhookSolid: React.FC<LanWebhookSolidProps>;
export default LanWebhookSolid;
