import React from 'react';

export interface LanFaceTissueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTissueThin: React.FC<LanFaceTissueThinProps>;
export default LanFaceTissueThin;
