import React from 'react';

export interface LanInboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInbox: React.FC<LanInboxProps>;
export default LanInbox;
