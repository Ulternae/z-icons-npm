import React from 'react';

export interface LanWebhookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWebhookSolid(props: LanWebhookSolidProps): React.ReactElement;
export default LanWebhookSolid;
