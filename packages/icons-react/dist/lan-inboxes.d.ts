import React from 'react';

export interface LanInboxesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxes: React.FC<LanInboxesProps>;
export default LanInboxes;
