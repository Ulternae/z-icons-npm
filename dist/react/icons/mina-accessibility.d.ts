import React from 'react';

export interface MinaAccessibilityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAccessibility: React.FC<MinaAccessibilityProps>;
export default MinaAccessibility;
