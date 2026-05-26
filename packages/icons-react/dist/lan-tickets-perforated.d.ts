import React from 'react';

export interface LanTicketsPerforatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsPerforated: React.FC<LanTicketsPerforatedProps>;
export default LanTicketsPerforated;
