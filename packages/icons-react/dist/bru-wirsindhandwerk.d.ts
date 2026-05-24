import React from 'react';

export interface BruWirsindhandwerkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWirsindhandwerk: React.FC<BruWirsindhandwerkProps>;
export default BruWirsindhandwerk;
