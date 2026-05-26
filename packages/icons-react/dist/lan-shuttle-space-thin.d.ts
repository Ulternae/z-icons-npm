import React from 'react';

export interface LanShuttleSpaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceThin: React.FC<LanShuttleSpaceThinProps>;
export default LanShuttleSpaceThin;
