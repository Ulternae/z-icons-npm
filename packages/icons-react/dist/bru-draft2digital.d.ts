import React from 'react';

export interface BruDraft2digitalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDraft2digital: React.FC<BruDraft2digitalProps>;
export default BruDraft2digital;
