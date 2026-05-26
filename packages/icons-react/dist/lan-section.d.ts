import React from 'react';

export interface LanSectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSection: React.FC<LanSectionProps>;
export default LanSection;
