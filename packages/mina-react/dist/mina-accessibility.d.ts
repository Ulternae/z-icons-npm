import React from 'react';

export interface MinaAccessibilityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAccessibility(props: MinaAccessibilityProps): React.ReactElement;
export default MinaAccessibility;
