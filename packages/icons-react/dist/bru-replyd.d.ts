import React from 'react';

export interface BruReplydProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruReplyd: React.FC<BruReplydProps>;
export default BruReplyd;
