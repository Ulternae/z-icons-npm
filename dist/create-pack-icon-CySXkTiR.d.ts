import React__default from 'react';

interface PackIconProps<IconName extends string> extends Omit<React__default.SVGProps<SVGSVGElement>, 'height' | 'name' | 'width'> {
    name: IconName;
    size?: string | number;
}

export type { PackIconProps as P };
