import React from 'react';

export interface LanWebhookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWebhookRegular(props: LanWebhookRegularProps): React.ReactElement;
export default LanWebhookRegular;
