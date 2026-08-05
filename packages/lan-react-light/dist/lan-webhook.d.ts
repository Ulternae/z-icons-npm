import React from 'react';

export interface LanWebhookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWebhook(props: LanWebhookProps): React.ReactElement;
export default LanWebhook;
