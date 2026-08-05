import React from 'react';

export interface LanMessageSmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageSms(props: LanMessageSmsProps): React.ReactElement;
export default LanMessageSms;
