import React from 'react';

export interface MinaPaintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPaint(props: MinaPaintProps): React.ReactElement;
export default MinaPaint;
